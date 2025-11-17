n.d(t, { Z: () => g }), n(997841);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(131388),
    o = n(171246),
    s = n(689011),
    c = n(931905),
    u = n(430824),
    d = n(563132),
    m = n(409813),
    p = n(586585),
    f = n(614277),
    b = n(750143),
    h = n(388032);
function g(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: g, selectedSku: x, selectedStoreListing: j, application: v } = (0, d.JL)(),
        y = (0, a.Z)(b.i),
        O = (0, l.e7)([u.Z], () => u.Z.getGuild(null == g ? void 0 : g.guild_id)),
        C = i.useCallback(() => t(m.h8.REVIEW), [t]);
    if (null == x) return null;
    let S = (0, o.KW)(x.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.C3, {
                children: y
                    ? (0, r.jsx)(c.h, {
                          confirmCta: h.intl.string(h.t.PBHFSq),
                          onConfirm: C,
                          onCancel: n,
                          title: h.intl.format(h.t["6n6oXA"], { tier: x.name }),
                          subtitle: S
                              ? h.intl.string(h.t.lzAoKB)
                              : h.intl.formatToPlainString(h.t["GqaY/j"], { guildName: null == O ? void 0 : O.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(s.Oc, {
                          icon: null == j ? void 0 : j.thumbnail,
                          storeListingBenefits: null == j ? void 0 : j.benefits,
                          application: null != v ? v : void 0,
                          title: h.intl.format(h.t.haiCxc, { tier: x.name }),
                          subtitle: S ? h.intl.string(h.t.RvtbP5) : h.intl.string(h.t.zY39Zu),
                          description: S
                              ? h.intl.formatToPlainString(h.t.QCe4rY, { applicationName: null == v ? void 0 : v.name })
                              : h.intl.string(h.t.n1Pu8C),
                      }),
            }),
            !y &&
                (0, r.jsx)(f.O3, {
                    children: (0, r.jsx)(p.Z, {
                        onBack: n,
                        backText: h.intl.string(h.t.TQBY1J),
                        onPrimary: C,
                        primaryCTA: p.g.CONTINUE,
                        primaryText: h.intl.string(h.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
