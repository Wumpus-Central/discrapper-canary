t.d(n, { Z: () => p });
var r = t(54381);
t(473749);
var i = t(442837),
    l = t(481060),
    a = t(434404),
    c = t(939863),
    o = t(430824),
    s = t(496675),
    u = t(981631),
    d = t(388032),
    g = t(776873);
function p(e) {
    let { guildId: n, onClose: t } = e,
        p = (0, i.e7)([o.Z, s.Z], () => {
            let e = o.Z.getGuild(n);
            return s.Z.can(u.Plq.MANAGE_ROLES, e);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(c.Z, {
                children: (0, r.jsx)("div", {
                    className: g.circle,
                    children: (0, r.jsx)(l.Que, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: g.icon,
                    }),
                }),
            }),
            (0, r.jsx)(l.Heading, {
                color: "header-primary",
                variant: "heading-xl/semibold",
                className: g.title,
                children: d.intl.string(d.t["WgZ+3D"]),
            }),
            (0, r.jsx)(l.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: g.subtitle,
                children: d.intl.string(d.t["v/S/PG"]),
            }),
            p &&
                (0, r.jsx)(l.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: g.roleTip,
                    children: d.intl.format(d.t["K+DH2o"], {
                        onClick: () => {
                            a.Z.open(n, u.pNK.ROLES), t();
                        },
                    }),
                }),
        ],
    });
}
