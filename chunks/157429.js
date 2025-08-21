e.d(t, { default: () => h }), e(388685);
var i = e(951288);
e(647438);
var s = e(512722),
    a = e.n(s),
    l = e(481060),
    o = e(935369),
    c = e(313201),
    r = e(53365),
    d = e(981631),
    u = e(388032),
    x = e(965193);
function h(n) {
    let { transitionState: t, guild: e, onClose: s } = n,
        h = (0, c.Dt)(),
        [m, { loading: p, error: _ }] = (0, o.Z)(r.oL),
        j = async () => {
            a()(null != e, "no guild"), null != (await m(e.id)) && s();
        };
    return (0, i.jsxs)(l.Y0X, {
        transitionState: t,
        "aria-labelledby": h,
        parentComponent: "RemoveMonetizationModal",
        children: [
            (0, i.jsxs)(l.xBx, {
                children: [
                    (0, i.jsx)(l.X6q, {
                        id: h,
                        variant: "heading-md/semibold",
                        children: u.intl.string(u.t.rRpcEx),
                    }),
                    (0, i.jsx)(l.olH, {
                        className: x.closeButton,
                        onClick: s,
                    }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                className: x.content,
                children: [
                    null != _
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(l.kzN, { children: _.message }), (0, i.jsx)(l.LZC, { size: 24 })],
                          })
                        : null,
                    (0, i.jsx)(l.R94, {
                        type: l.R94.Types.ERROR,
                        children: u.intl.format(u.t["Oa5P6+"], {
                            guildName: e.name,
                            url: d.EYA.DEVELOPER_PORTAL_TEAMS,
                        }),
                    }),
                    (0, i.jsx)(l.LZC, { size: 16 }),
                ],
            }),
            (0, i.jsx)(l.mzw, {
                className: x.__invalid_footer,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: x.__invalid_goBackButton,
                    children: (0, i.jsx)(l.zxk, {
                        variant: "critical-primary",
                        text: u.intl.string(u.t.R3BPHx),
                        loading: p,
                        onClick: j,
                    }),
                }),
            }),
        ],
    });
}
