n.d(e, { default: () => C });
var i = n(477900),
    a = n(582128),
    r = n(855986),
    s = n(935462),
    d = n(289873),
    l = n(534514),
    c = n(620632),
    o = n(73153),
    E = n(652215),
    u = n(235986),
    h = n(558179);
let p = {};
class g extends r.Ay.Store {
    static displayName = "EULAStore";
    getEULA(t) {
        return p[t];
    }
}
let m = new g(o.h, {
    EULA_FETCH_SUCCESS: function (t) {
        let { eula: e } = t;
        p[e.id] = e;
    },
});
var A = n(792996),
    S = n(662560);
function C(t) {
    let { eulaId: e, transitionState: n, onClose: p } = t,
        g = (0, r.bG)([m], () => m.getEULA(e));
    a.useEffect(() => {
        !(async function (t) {
            let e = await c.Bo.get({ url: E.Rsh.STORE_EULA(t), oldFormErrors: !0, rejectWithError: (0, c.fT)() });
            o.h.dispatch({ type: "EULA_FETCH_SUCCESS", eula: e.body });
        })(e);
    }, [e]);
    let C = g?.name ?? A.intl.string(A.t.ZTNur7),
        f = null != g ? (0, i.jsx)(h.A, { children: g.content, className: S.w }) : (0, i.jsx)(d.y, { className: S.u });
    return (0, i.jsxs)(s.EO, {
        "data-migration-pending": !0,
        transitionState: n,
        size: s.rI.SMALL,
        "aria-label": C,
        parentComponent: "EULA",
        children: [
            (0, i.jsxs)(s.rQ, {
                "data-migration-pending": !0,
                justify: u.A.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(l.D, { variant: "heading-lg/semibold", children: C }),
                    (0, i.jsx)(s.s_, { "data-migration-pending": !0, onClick: p }),
                ],
            }),
            (0, i.jsx)(s.$m, { "data-migration-pending": !0, children: f }),
        ],
    });
}
