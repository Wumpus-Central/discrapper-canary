n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var l = n(371444),
    i = n(392421),
    a = n(602137),
    s = n(397927),
    o = n(212007),
    c = n(422844),
    d = n(853742),
    u = n(985018),
    m = n(641131),
    h = n(384474);

function g(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: g, layoutType: f, tagSetting: x } = (0, c.R)(t.id),
        { showResolvedFlags: p, setShowResolvedFlags: b } = (0, o.T)(t.id),
        j = (0, c.p)(),
        v = t.isMediaChannel(),
        _ = (e) => {
            (0, d.Cd)({
                guildId: t.guild_id,
                channelId: t.id,
                sortOrder: e,
            }),
                j.getState().setSortOrder(t.id, e),
                n();
        },
        y = (e) => {
            (0, d.ad)({
                guildId: t.guild_id,
                channelId: t.id,
                forumLayout: e,
            }),
                j.getState().setLayoutType(t.id, e),
                n();
        },
        A = (e) => {
            j.getState().setTagSetting(t.id, e), n();
        },
        C = null != t.availableTags && t.availableTags.length > 0;
    return (0, r.jsx)("div", {
        className: h.k,
        children: (0, r.jsxs)(s.W1t, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": v ? u.intl.string(u.t["kQN/bi"]) : u.intl.string(u.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, r.jsxs)(s.rXV, {
                    label: u.intl.string(u.t.f8wNDl),
                    children: [
                        (0, r.jsx)(s.iDA, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: u.intl.string(u.t.jOPmcI),
                            action: () => _(a.T.LATEST_ACTIVITY),
                            checked: g === a.T.LATEST_ACTIVITY,
                        }),
                        (0, r.jsx)(s.iDA, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: u.intl.string(u.t.UIltXd),
                            action: () => _(a.T.CREATION_DATE),
                            checked: g === a.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, r.jsx)(s.rXV, {
                        label: u.intl.string(m.default.PsM2b4),
                        children: (0, r.jsx)(s.sLh, {
                            id: "resolved-flags-none",
                            label: u.intl.string(u.t.XJuakA),
                            action: () => b(!p),
                            checked: p,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, r.jsxs)(s.rXV, {
                          label: u.intl.string(u.t.mFMDSq),
                          children: [
                              (0, r.jsx)(s.iDA, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: u.intl.string(u.t["NJFr+g"]),
                                  action: () => y(l.C.LIST),
                                  checked: f === l.C.LIST,
                              }),
                              (0, r.jsx)(s.iDA, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: u.intl.string(u.t.wKeggb),
                                  action: () => y(l.C.GRID),
                                  checked: f === l.C.GRID,
                              }),
                          ],
                      }),
                C
                    ? (0, r.jsxs)(s.rXV, {
                          label: u.intl.string(u.t.Paxaug),
                          children: [
                              (0, r.jsx)(s.iDA, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: u.intl.string(u.t.rQ0ctQ),
                                  action: () => A(i.n.MATCH_SOME),
                                  checked: x === i.n.MATCH_SOME,
                              }),
                              (0, r.jsx)(s.iDA, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: u.intl.string(u.t.FCXUu0),
                                  action: () => A(i.n.MATCH_ALL),
                                  checked: x === i.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, r.jsx)(s.rXV, {
                    children: (0, r.jsx)(s.Drp, {
                        id: "reset-all",
                        label: u.intl.string(u.t["3b//lO"]),
                        action: () => {
                            _(t.getDefaultSortOrder()), y(t.getDefaultLayout()), A(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
