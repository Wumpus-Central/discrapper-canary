"use strict";
n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var i = n(371444),
    s = n(392421),
    a = n(602137),
    r = n(397927),
    o = n(212007),
    d = n(422844),
    c = n(853742),
    u = n(985018),
    m = n(641131),
    h = n(384474);
function x(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: x, layoutType: g, tagSetting: f } = (0, d.R)(t.id),
        { showResolvedFlags: p, setShowResolvedFlags: _ } = (0, o.T)(t.id),
        j = (0, d.p)(),
        b = t.isMediaChannel(),
        v = (e) => {
            (0, c.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), j.getState().setSortOrder(t.id, e), n();
        },
        A = (e) => {
            (0, c.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
                j.getState().setLayoutType(t.id, e),
                n();
        },
        C = (e) => {
            j.getState().setTagSetting(t.id, e), n();
        },
        T = null != t.availableTags && t.availableTags.length > 0;
    return (0, l.jsx)("div", {
        className: h.k,
        children: (0, l.jsxs)(r.W1t, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": b ? u.intl.string(u.t["kQN/bi"]) : u.intl.string(u.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, l.jsxs)(r.rXV, {
                    label: u.intl.string(u.t.f8wNDl),
                    children: [
                        (0, l.jsx)(r.iDA, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: u.intl.string(u.t.jOPmcI),
                            action: () => v(a.T.LATEST_ACTIVITY),
                            checked: x === a.T.LATEST_ACTIVITY,
                        }),
                        (0, l.jsx)(r.iDA, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: u.intl.string(u.t.UIltXd),
                            action: () => v(a.T.CREATION_DATE),
                            checked: x === a.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, l.jsx)(r.rXV, {
                        label: u.intl.string(m.default.PsM2b4),
                        children: (0, l.jsx)(r.sLh, {
                            id: "resolved-flags-none",
                            label: u.intl.string(u.t.XJuakA),
                            action: () => _(!p),
                            checked: p,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, l.jsxs)(r.rXV, {
                          label: u.intl.string(u.t.mFMDSq),
                          children: [
                              (0, l.jsx)(r.iDA, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: u.intl.string(u.t["NJFr+g"]),
                                  action: () => A(i.C.LIST),
                                  checked: g === i.C.LIST,
                              }),
                              (0, l.jsx)(r.iDA, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: u.intl.string(u.t.wKeggb),
                                  action: () => A(i.C.GRID),
                                  checked: g === i.C.GRID,
                              }),
                          ],
                      }),
                T
                    ? (0, l.jsxs)(r.rXV, {
                          label: u.intl.string(u.t.Paxaug),
                          children: [
                              (0, l.jsx)(r.iDA, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: u.intl.string(u.t.rQ0ctQ),
                                  action: () => C(s.n.MATCH_SOME),
                                  checked: f === s.n.MATCH_SOME,
                              }),
                              (0, l.jsx)(r.iDA, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: u.intl.string(u.t.FCXUu0),
                                  action: () => C(s.n.MATCH_ALL),
                                  checked: f === s.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, l.jsx)(r.rXV, {
                    children: (0, l.jsx)(r.Drp, {
                        id: "reset-all",
                        label: u.intl.string(u.t["3b//lO"]),
                        action: () => {
                            v(t.getDefaultSortOrder()), A(t.getDefaultLayout()), C(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
