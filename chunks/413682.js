n.d(t, { w: () => g });
var r = n(951288),
    i = n(647438),
    l = n(780384),
    s = n(481060),
    a = n(410030),
    o = n(434404),
    c = n(388032),
    d = n(600977),
    u = n(935653),
    m = n(449874);
function g(e) {
    let { canManageGuild: t, premiumProgressBarEnabled: n } = e,
        g = (0, a.ZP)(),
        p = i.useCallback((e) => {
            o.Z.updateGuild({ premiumProgressBarEnabled: e });
        }, []);
    return (0, r.jsxs)(s.hjN, {
        className: d.container,
        children: [
            (0, r.jsx)("div", {
                className: d.column,
                children: (0, r.jsx)(s.rsf, {
                    label: c.intl.string(c.t.Dl4mJS),
                    description: c.intl.string(c.t.xzHcoa),
                    checked: n,
                    onChange: p,
                    disabled: !t,
                }),
            }),
            (0, r.jsx)("div", {
                className: d.column,
                children: (0, r.jsx)("img", {
                    alt: c.intl.string(c.t.UOJp5e),
                    src: (0, l.ap)(g) ? m : u,
                    className: d.progressBarImage,
                }),
            }),
        ],
    });
}
