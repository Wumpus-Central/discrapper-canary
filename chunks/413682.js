n.d(t, { w: () => m });
var r = n(54381),
    i = n(473749),
    l = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(434404),
    c = n(388032),
    d = n(600977),
    u = n(935653),
    g = n(449874);
function m(e) {
    let { canManageGuild: t, premiumProgressBarEnabled: n } = e,
        m = (0, s.ZP)(),
        p = i.useCallback((e) => {
            o.Z.updateGuild({ premiumProgressBarEnabled: e });
        }, []);
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsx)("div", {
                className: d.column,
                children: (0, r.jsx)(a.rsf, {
                    label: c.intl.string(c.t.Dl4mJS),
                    description: c.intl.string(c.t.xzHcod),
                    checked: n,
                    onChange: p,
                    disabled: !t,
                }),
            }),
            (0, r.jsx)("div", {
                className: d.column,
                children: (0, r.jsx)("img", {
                    alt: c.intl.string(c.t.UOJp5a),
                    src: (0, l.ap)(m) ? g : u,
                    className: d.progressBarImage,
                }),
            }),
        ],
    });
}
