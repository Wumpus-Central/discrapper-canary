r.d(t, {
    A: () => O,
});
var n = r(627968);
r(64700);
var i = r(311907),
    l = r(397927),
    o = r(71393),
    c = r(287809),
    a = r(234053),
    u = r(395504),
    s = r(652215),
    b = r(985018);

function O(e) {
    let t = (0, u.jN)(e),
        r = (0, i.bG)([o.A], () => o.A.getGuild(e)),
        O = (0, i.bG)([c.default], () => c.default.getCurrentUser());
    return null != O && null != r && (r.features.has(s.GuildFeatures.COMMUNITY) || O.isStaff())
        ? (0, n.jsx)(l.sLh, {
              id: "opt-in",
              label: b.intl.string(b.t.FB2ZZV),
              checked: !t,
              action: () => {
                  (0, a.Lu)(e);
              },
          })
        : null;
}
