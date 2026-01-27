n.d(t, {
    A: () => h,
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(71393),
    s = n(287809),
    d = n(234053),
    u = n(395504),
    o = n(652215),
    c = n(985018);

function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, u.jN)(e),
        h = (0, l.bG)([a.A], () => a.A.getGuild(e)),
        g = (0, l.bG)([s.default], () => s.default.getCurrentUser());
    return null != g && null != h && (h.features.has(o.GuildFeatures.COMMUNITY) || g.isStaff())
        ? (0, i.jsx)(r.sLh, {
              id: "opt-in",
              label: c.intl.string(c.t.FB2ZZV),
              leadingAccessory: t
                  ? {
                        type: "icon",
                        icon: r.bMW,
                    }
                  : void 0,
              checked: !n,
              action: () => {
                  (0, d.Lu)(e);
              },
          })
        : null;
}
