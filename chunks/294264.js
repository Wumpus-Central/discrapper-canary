n.d(e, { default: () => f });
var a = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(289873),
    d = n(935462),
    l = n(297264),
    c = n(636537),
    o = n(228366),
    E = n(652215);
async function u(t) {
    let e = await c.Bo.get({ url: E.Rsh.STORE_EULA(t), oldFormErrors: !0, rejectWithError: (0, c.fT)() });
    o.h.dispatch({ type: "EULA_FETCH_SUCCESS", eula: e.body });
}
var h = n(235986),
    p = n(558179);
let g = {};
class m extends r.Ay.Store {
    static displayName = "EULAStore";
    getEULA(t) {
        return g[t];
    }
}
let A = new m(o.h, {
    EULA_FETCH_SUCCESS: function (t) {
        let { eula: e } = t;
        g[e.id] = e;
    },
});
var S = n(375708),
    C = n(191315);
function f(t) {
    let { eulaId: e, transitionState: n, onClose: c } = t,
        o = (0, r.bG)([A], () => A.getEULA(e));
    i.useEffect(() => {
        u(e);
    }, [e]);
    let E = o?.name ?? S.intl.string(S.t.ZTNur7),
        g = null != o ? (0, a.jsx)(p.A, { children: o.content, className: C.w }) : (0, a.jsx)(s.y, { className: C.u });
    return (0, a.jsxs)(d.EO, {
        "data-migration-pending": !0,
        transitionState: n,
        size: d.rI.SMALL,
        "aria-label": E,
        parentComponent: "EULA",
        children: [
            (0, a.jsxs)(d.rQ, {
                "data-migration-pending": !0,
                justify: h.A.Justify.BETWEEN,
                children: [
                    (0, a.jsx)(l.D, { variant: "heading-lg/semibold", children: E }),
                    (0, a.jsx)(d.s_, { "data-migration-pending": !0, onClick: c }),
                ],
            }),
            (0, a.jsx)(d.$m, { "data-migration-pending": !0, children: g }),
        ],
    });
}
