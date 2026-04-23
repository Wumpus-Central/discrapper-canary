r.d(t, { default: () => E });
var a = r(627968),
    n = r(64700),
    l = r(17928),
    s = r(289873),
    i = r(935462),
    d = r(534514),
    o = r(636537),
    c = r(228366),
    u = r(652215);
async function h(e) {
    let t = await o.Bo.get({ url: u.Rsh.STORE_EULA(e), oldFormErrors: !0, rejectWithError: !1 });
    c.h.dispatch({ type: "EULA_FETCH_SUCCESS", eula: t.body });
}
var g = r(235986),
    p = r(558179);
let m = {};
class f extends l.Ay.Store {
    static displayName = "EULAStore";
    getEULA(e) {
        return m[e];
    }
}
let k = new f(c.h, {
    EULA_FETCH_SUCCESS: function (e) {
        let { eula: t } = e;
        m[t.id] = t;
    },
});
var x = r(985018),
    j = r(191315);
function E(e) {
    let { eulaId: t, transitionState: r, onClose: o } = e,
        c = (0, l.bG)([k], () => k.getEULA(t));
    n.useEffect(() => {
        h(t);
    }, [t]);
    let u = c?.name ?? x.intl.string(x.t.ZTNur7),
        m = null != c ? (0, a.jsx)(p.A, { children: c.content, className: j.w }) : (0, a.jsx)(s.y, { className: j.u });
    return (0, a.jsxs)(i.EO, {
        "data-migration-pending": !0,
        transitionState: r,
        size: i.rI.SMALL,
        "aria-label": u,
        parentComponent: "EULA",
        children: [
            (0, a.jsxs)(i.rQ, {
                "data-migration-pending": !0,
                justify: g.A.Justify.BETWEEN,
                children: [
                    (0, a.jsx)(d.D, { variant: "heading-lg/semibold", children: u }),
                    (0, a.jsx)(i.s_, { "data-migration-pending": !0, onClick: o }),
                ],
            }),
            (0, a.jsx)(i.$m, { "data-migration-pending": !0, children: m }),
        ],
    });
}
