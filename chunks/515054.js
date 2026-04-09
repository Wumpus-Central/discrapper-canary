n.d(t, { A: () => f, K: () => E });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    o = n(207803),
    d = n(183555),
    c = n(61881),
    u = n(790417),
    A = n(113763),
    _ = n(583246),
    h = n(463259),
    m = n(133583),
    g = n(518477),
    p = n(527573);
function E(e) {
    let { children: t, className: n, scrollerRef: a, ...r } = e;
    return (0, i.jsx)(s.HOs, { ref: a, className: l()(p.gN, n), fade: !0, ...r, children: t });
}
function I(e) {
    let { user: t, currentUser: n, section: a, displayProfile: r, guildId: l, channelId: s, onClose: o } = e;
    return a === g.RP.ACTIVITY
        ? (0, i.jsx)(u.A, { user: t, currentUser: n, displayProfile: r, guildId: l, channelId: s, onClose: o })
        : a === g.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(A.A, { user: t, guildId: l, channelId: s, onClose: o })
          : a === g.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(_.A, { user: t, onClose: o })
            : a === g.RP.WIDGETS
              ? (0, i.jsx)(h.A, { user: t, guildId: l, channelId: s })
              : a === g.RP.WISHLIST
                ? (0, i.jsx)(m.A, { profileOwner: t })
                : null;
}
function f(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: r,
            guildId: l,
            channelId: u,
            items: A,
            initialSection: _,
            onClose: h,
        } = e,
        { trackUserProfileAction: m } = (0, d.NJ)(),
        [{ section: E, text: f }, C] = a.useState(
            A.find((e) => {
                let { section: t } = e;
                return t === _;
            }) ?? A[0],
        );
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsx)(s.HOs, {
                orientation: "horizontal",
                className: p.gU,
                fade: !0,
                paddingFix: !1,
                children: (0, i.jsx)(s.VQ0, {
                    type: "top",
                    look: "custom",
                    selectedItem: E,
                    onItemSelect: (e) => {
                        c.A.hasUnsavedChanges() && E === g.RP.WIDGETS
                            ? (0, o.VQ)()
                            : (m({ action: "PRESS_SECTION", section: e }),
                              C((t) => A.find((t) => t.section === e) ?? t));
                    },
                    children: A.map((e) =>
                        (0, i.jsx)(
                            s.VQ0.Item,
                            { className: p.YU, id: e.section, "aria-label": e.text, children: e.text },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, i.jsx)(s.VQ0.Panel, {
                id: E,
                "aria-label": f,
                className: p.NM,
                children: (0, i.jsx)(s.Fmo, {
                    component: (0, i.jsx)(s.AC4, { children: (0, i.jsx)(s.H, { children: f }) }),
                    children: (0, i.jsx)(I, {
                        user: t,
                        currentUser: n,
                        displayProfile: r,
                        guildId: l,
                        channelId: u,
                        section: E,
                        onClose: h,
                    }),
                }),
            }),
        ],
    });
}
