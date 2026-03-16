n.d(t, { A: () => I, K: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(397927),
    o = n(183555),
    c = n(958805),
    d = n(61881),
    u = n(790417),
    m = n(113763),
    g = n(583246),
    x = n(463259),
    f = n(133583),
    p = n(518477),
    h = n(96124);
function _(e) {
    let { children: t, className: n, scrollerRef: l, ...a } = e;
    return (0, i.jsx)(r.HOs, { ref: l, className: s()(h.gN, n), fade: !0, ...a, children: t });
}
function A(e) {
    let { user: t, currentUser: n, section: l, displayProfile: a, guildId: s, channelId: r, onClose: o } = e;
    return l === p.RP.ACTIVITY
        ? (0, i.jsx)(u.A, { user: t, currentUser: n, displayProfile: a, guildId: s, channelId: r, onClose: o })
        : l === p.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(m.A, { user: t, guildId: s, channelId: r, onClose: o })
          : l === p.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(g.A, { user: t, onClose: o })
            : l === p.RP.WIDGETS
              ? (0, i.jsx)(x.A, { user: t, guildId: s, channelId: r })
              : l === p.RP.WISHLIST
                ? (0, i.jsx)(f.A, { profileOwner: t })
                : null;
}
function I(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: a,
            guildId: s,
            channelId: u,
            items: m,
            initialSection: g,
            onClose: x,
        } = e,
        { trackUserProfileAction: f } = (0, o.NJ)(),
        [{ section: _, text: I }, j] = l.useState(
            m.find((e) => {
                let { section: t } = e;
                return t === g;
            }) ?? m[0],
        );
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [
            (0, i.jsx)(r.HOs, {
                orientation: "horizontal",
                className: h.gU,
                fade: !0,
                paddingFix: !1,
                children: (0, i.jsx)(r.VQ0, {
                    type: "top",
                    look: "custom",
                    selectedItem: _,
                    onItemSelect: (e) => {
                        d.A.hasUnsavedChanges() && _ === p.RP.WIDGETS
                            ? c.A.notifyUnsavedWidgets()
                            : (f({ action: "PRESS_SECTION", section: e }),
                              j((t) => m.find((t) => t.section === e) ?? t));
                    },
                    children: m.map((e) =>
                        (0, i.jsx)(
                            r.VQ0.Item,
                            { className: h.YU, id: e.section, "aria-label": e.text, children: e.text },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, i.jsx)(r.VQ0.Panel, {
                id: _,
                "aria-label": I,
                className: h.NM,
                children: (0, i.jsx)(r.Fmo, {
                    component: (0, i.jsx)(r.AC4, { children: (0, i.jsx)(r.H, { children: I }) }),
                    children: (0, i.jsx)(A, {
                        user: t,
                        currentUser: n,
                        displayProfile: a,
                        guildId: s,
                        channelId: u,
                        section: _,
                        onClose: x,
                    }),
                }),
            }),
        ],
    });
}
