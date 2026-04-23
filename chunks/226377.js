t.d(e, { b: () => v });
var n = t(627968),
    r = t(64700),
    s = t(284009),
    i = t.n(s),
    l = t(13202),
    c = t(935462),
    o = t(834730),
    d = t(534514),
    m = t(821609),
    x = t(811893),
    u = t(228366),
    N = t(370480),
    h = t(738104),
    p = t(235986),
    j = t(626584),
    C = t(141241),
    g = t(985018),
    b = t(974651);
let E = new j.A("TwoWayLink");
function v(a) {
    let {
            platformType: e,
            isWaitingForConnection: t,
            onWaitingForConnection: s,
            expectedCallbackState: j,
            onAuthToken: v,
            onError: k,
            onClose: f,
            img: A,
            title: w,
            body: D,
            redirectDestination: _,
        } = a,
        L = r.useCallback(async () => {
            let a;
            try {
                if (((a = await (0, h.d)(e, { twoWayLinkType: l.I.DESKTOP })), null == a))
                    throw Error("missing authorizeURL");
            } catch (a) {
                E.error("Error opening provider authorize page", a), k();
                return;
            }
            let { state: t } = (0, N.vA)(a);
            i()(null != t, "Authorize URL state query parameter must be present"), s?.(t);
        }, [e, k, s]),
        R = r.useCallback(
            (a) => {
                let { callbackCode: t, callbackState: n } = a;
                n !== j
                    ? E.warn(`${e} link: received mismatching callback state!`)
                    : v({ callbackCode: t, callbackState: n });
            },
            [e, j, v],
        );
    return (
        r.useEffect(
            () => (
                u.h.subscribe("USER_CONNECTIONS_LINK_CALLBACK", R),
                () => {
                    u.h.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", R);
                }
            ),
            [R],
        ),
        (0, n.jsxs)(C.A, {
            children: [
                (0, n.jsxs)(c.rQ, {
                    "data-migration-pending": !0,
                    direction: p.A.Direction.VERTICAL,
                    className: b.wx,
                    separator: !1,
                    children: [
                        (0, n.jsx)(o.E, {
                            className: b.u1,
                            variant: "text-xs/bold",
                            color: "text-default",
                            children: g.intl.format(g.t.fHz6eR, { number: 1, total: 2 }),
                        }),
                        (0, n.jsxs)("div", { className: b.bm, children: [A, " "] }),
                        (0, n.jsx)(d.D, { className: b.DD, variant: "heading-xl/extrabold", children: w }),
                        null != f && (0, n.jsx)(c.s_, { className: b.b, onClick: f }),
                    ],
                }),
                (0, n.jsxs)(c.$m, {
                    "data-migration-pending": !0,
                    className: b.rf,
                    paddingFix: !1,
                    children: [
                        (0, n.jsx)(o.E, { tag: "p", variant: "text-md/normal", color: "text-default", children: D }),
                        !t &&
                            null != _ &&
                            (0, n.jsx)(o.E, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: g.intl.format(g.t.XhlYYn, { redirectUrl: _ }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.jl, {
                    "data-migration-pending": !0,
                    className: b.qr,
                    children: (0, n.jsx)(m.$, {
                        variant: t ? "secondary" : "primary",
                        text: g.intl.format(t ? g.t["8Laby+"] : g.t["6623tt"], {
                            popoutWindowIcon: {},
                            popoutWindowIconHook: () =>
                                (0, n.jsx)(x.t, { color: "currentColor", className: b.LE, size: "xs" }),
                        }),
                        onClick: L,
                        fullWidth: !0,
                    }),
                }),
            ],
        })
    );
}
