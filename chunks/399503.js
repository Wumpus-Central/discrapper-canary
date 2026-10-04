n.d(t, { K: () => v, k: () => E });
var i = n(477900),
    r = n(582128),
    l = n(598748),
    a = n(941426),
    o = n(382483),
    s = n(385113),
    u = n(288610),
    d = n(201718),
    c = n(287809),
    f = n(238490),
    h = n(409478),
    p = n(979892);
let g = new a.Vy("VibegrationsWidgetCapture"),
    _ = new Map();
function m() {
    return new Promise((e) => requestAnimationFrame(() => e()));
}
function w(e) {
    let { applicationId: t, generateImageRef: n } = e,
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            let e = l.current;
            if (null == e) return;
            let t = !1;
            return (
                (async function (e) {
                    (await m(),
                        await m(),
                        await Promise.all(Array.from(e.querySelectorAll("img")).map((e) => e.decode().catch(() => {}))),
                        t || n(e));
                })(e).catch(() => {}),
                () => {
                    t = !0;
                }
            );
        }, [n]),
        (0, i.jsx)("div", { ref: l, className: p.P, children: (0, i.jsx)(h.A, { applicationId: t }) })
    );
}
function E(e, t) {
    let { generateImage: n } = (0, u.R)({
            renderComponent: (e) => (null == t ? null : (0, i.jsx)(w, { ...e, applicationId: t })),
            imageOptions: { pixelRatio: 2, cacheBust: !1 },
        }),
        a = r.useRef(n);
    (r.useLayoutEffect(() => {
        a.current = n;
    }),
        r.useEffect(() => {
            if (null == e || null == t) return;
            let n = async () => {
                let e = c.default.getCurrentUser();
                if (null == e) throw Error("no signed-in user to render the widget for");
                let n = Date.now();
                await A(
                    Promise.all([(0, o.un)(t, { force: !0 }), d.A.fetchUserApplicationIdentitiesWithProfiles(e.id)]),
                    4e3,
                    "refreshing the widget data timed out",
                ).catch((e) => g.warn("widget data refresh skipped", { err: e }));
                let i = s.A.getConfig(t)?.surfaces;
                if (
                    !(0, f.yZ)({
                        widgetTop: i?.[l.m.WIDGET_TOP] != null,
                        widgetBottom: i?.[l.m.WIDGET_BOTTOM] != null,
                        miniProfile: i?.[l.m.MINI_PROFILE] != null,
                    }).hasAny
                )
                    throw Error("the deployed preview app has no profile widget surfaces");
                let r = await A(
                        a.current(),
                        12e3 - (Date.now() - n),
                        "rendering the widget took longer than the capture allows",
                    ),
                    u = await createImageBitmap(r),
                    h = { width: u.width / 2, height: u.height / 2 };
                return (u.close(), { blob: r, ...h });
            };
            return (
                _.set(e, n),
                () => {
                    _.get(e) === n && _.delete(e);
                }
            );
        }, [e, t]));
}
function A(e, t, n) {
    return new Promise((i, r) => {
        let l = setTimeout(() => r(Error(n)), t);
        e.then(
            (e) => {
                (clearTimeout(l), i(e));
            },
            (e) => {
                (clearTimeout(l), r(e));
            },
        );
    });
}
async function v(e, t) {
    let n,
        i,
        r = _.get(e);
    if (null == r) return { status: "unavailable" };
    try {
        [n, i] = await Promise.all([r(), A(t.resolveUploadUrl(), 12e3, "resolving the upload URL timed out")]);
    } catch (e) {
        return (
            g.warn("widget capture preparation failed", { err: e }),
            { status: "failed", message: e instanceof Error ? e.message : "preparing the widget capture failed" }
        );
    }
    let l = null == t.onAccepted ? { uploadToken: void 0 } : await t.onAccepted();
    if (null == l) return { status: "unavailable" };
    let a = Math.round(n.width),
        o = Math.round(n.height),
        s = {
            mode: "widget",
            bounds: { x: 0, y: 0, width: a, height: o },
            viewport: { width: a, height: o },
            scale: 2,
            devicePixelRatio: window.devicePixelRatio,
            ...(null == t.build ? {} : { build: t.build }),
            source: "dom",
        },
        u = {
            "content-type": n.blob.type,
            "x-vibegrations-capture-id": t.captureId,
            "x-vibegrations-capture-meta": encodeURIComponent(JSON.stringify(s)),
        };
    (null != t.build && (u["x-vibegrations-build"] = t.build),
        null != l.uploadToken && (u["x-vibegrations-capture-token"] = l.uploadToken));
    try {
        let e = await fetch(i, { method: "POST", headers: u, body: n.blob });
        if (!e.ok) return { status: "failed", message: `the widget upload was refused (${e.status})` };
    } catch (e) {
        return (g.warn("widget upload failed", { err: e }), { status: "failed", message: "the widget upload failed" });
    }
    return { status: "accepted" };
}
