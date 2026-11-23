i.d(t, { captureConjureProfileWidget: () => R, k: () => k });
var r = i(477900),
    a = i(582128),
    n = i(598748),
    l = i(611599),
    u = i(382483),
    o = i(385113),
    s = i(288610),
    d = i(201718),
    c = i(287809),
    p = i(238490),
    f = i(855986),
    h = i(284460),
    w = i(531913),
    g = i(587895),
    m = i(633075),
    T = i(139730),
    I = i(591410),
    P = i(844474);
function A(e) {
    let { applicationId: t } = e,
        i = (0, f.bG)([c.default], () => c.default.getCurrentUser());
    return null == i ? null : (0, r.jsx)(v, { applicationId: t, user: i });
}
function v(e) {
    let { applicationId: t, user: i } = e,
        l = (0, f.bG)([g.A], () => g.A.getApplication(t)),
        u = a.useMemo(() => new m.R({ applicationId: t }), [t]),
        o = (0, w.A)(i.id, t),
        s = o.surfaceConfigs,
        d = (0, p.yZ)({
            widgetTop: null != s[n.m.WIDGET_TOP],
            widgetBottom: null != s[n.m.WIDGET_BOTTOM],
            miniProfile: null != s[n.m.MINI_PROFILE],
        });
    return d.hasAny
        ? (0, r.jsx)("div", {
              className: P.$C,
              children: (0, r.jsxs)("div", {
                  className: P.PV,
                  children: [
                      d.hasMainCard
                          ? (0, r.jsx)("div", {
                                className: P.a9,
                                children: (0, r.jsx)(I.A, {
                                    user: i,
                                    widget: u,
                                    allowEditing: !1,
                                    disableInteraction: !0,
                                    interactiveLinks: !0,
                                    disableCTAActions: !0,
                                }),
                            })
                          : null,
                      d.hasPopoutCard && null != l
                          ? (0, r.jsx)("div", {
                                className: P.ql,
                                children: (0, r.jsx)(T.A, { application: l, rendererProps: o, renderText: h.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var b = i(420928),
    y = i(979892);
let C = new l.Vy("ConjureWidgetCapture"),
    x = new Map();
function E() {
    return new Promise((e) => requestAnimationFrame(() => e()));
}
function j(e) {
    let { applicationId: t, generateImageRef: i } = e,
        n = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = n.current;
            if (null == e) return;
            let t = !1;
            return (
                (async function (e) {
                    (await E(),
                        await E(),
                        await Promise.all(Array.from(e.querySelectorAll("img")).map((e) => e.decode().catch(() => {}))),
                        t || i(e));
                })(e).catch(() => {}),
                () => {
                    t = !0;
                }
            );
        }, [i]),
        (0, r.jsx)("div", { ref: n, className: y.P, children: (0, r.jsx)(A, { applicationId: t }) })
    );
}
function k(e, t) {
    let { generateImage: i } = (0, s.R)({
            renderComponent: (e) => (null == t ? null : (0, r.jsx)(j, { ...e, applicationId: t })),
            imageOptions: { scale: 2, dpr: 1 },
        }),
        l = a.useRef(i);
    (a.useLayoutEffect(() => {
        l.current = i;
    }),
        a.useEffect(() => {
            if (null == e || null == t) return;
            let i = async () => {
                let e = c.default.getCurrentUser();
                if (null == e) throw Error("no signed-in user to render the widget for");
                let i = Date.now();
                await O(
                    Promise.all([(0, u.un)(t, { force: !0 }), d.A.fetchUserApplicationIdentitiesWithProfiles(e.id)]),
                    4e3,
                    "refreshing the widget data timed out",
                ).catch((e) => C.warn("widget data refresh skipped", { err: e }));
                let r = o.A.getConfig(t)?.surfaces;
                if (
                    !(0, p.yZ)({
                        widgetTop: r?.[n.m.WIDGET_TOP] != null,
                        widgetBottom: r?.[n.m.WIDGET_BOTTOM] != null,
                        miniProfile: r?.[n.m.MINI_PROFILE] != null,
                    }).hasAny
                )
                    throw Error("the deployed preview app has no profile widget surfaces");
                let a = await O(
                        l.current(),
                        12e3 - (Date.now() - i),
                        "rendering the widget took longer than the capture allows",
                    ),
                    s = await createImageBitmap(a),
                    f = { width: s.width / 2, height: s.height / 2 };
                return (s.close(), { blob: a, ...f });
            };
            return (
                x.set(e, i),
                () => {
                    x.get(e) === i && x.delete(e);
                }
            );
        }, [e, t]));
}
function O(e, t, i) {
    return new Promise((r, a) => {
        let n = setTimeout(() => a(Error(i)), t);
        e.then(
            (e) => {
                (clearTimeout(n), r(e));
            },
            (e) => {
                (clearTimeout(n), a(e));
            },
        );
    });
}
async function R(e, t) {
    let i,
        r,
        a = x.get(e);
    if (null == a) return { status: "unavailable" };
    try {
        [i, r] = await Promise.all([a(), O(t.resolveUploadUrl(), 12e3, "resolving the upload URL timed out")]);
    } catch (e) {
        return (
            C.warn("widget capture preparation failed", { err: e }),
            { status: "failed", message: e instanceof Error ? e.message : "preparing the widget capture failed" }
        );
    }
    let n = null == t.onAccepted ? { uploadToken: void 0 } : await t.onAccepted();
    if (null == n) return { status: "unavailable" };
    let l = Math.round(i.width),
        u = Math.round(i.height),
        o = {
            mode: "widget",
            bounds: { x: 0, y: 0, width: l, height: u },
            viewport: { width: l, height: u },
            scale: 2,
            devicePixelRatio: window.devicePixelRatio,
            ...(null == t.build ? {} : { build: t.build }),
            source: "dom",
        };
    try {
        let e = await (0, b.e)(r, i.blob, {
            captureId: t.captureId,
            meta: encodeURIComponent(JSON.stringify(o)),
            build: t.build,
            uploadToken: n.uploadToken,
        });
        if (!e.ok) return { status: "failed", message: `the widget upload was refused (${e.status})` };
    } catch (e) {
        return (C.warn("widget upload failed", { err: e }), { status: "failed", message: "the widget upload failed" });
    }
    return { status: "accepted" };
}
