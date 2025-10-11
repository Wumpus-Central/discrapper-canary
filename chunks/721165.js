n.d(t, { Z: () => g }), n(997841);
var i = n(951288),
    r = n(647438),
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
        { subscriptionMetadataRequest: g, selectedSku: x, selectedStoreListing: v, application: j } = (0, d.JL)(),
        y = (0, a.Z)(b.i),
        O = (0, l.e7)([u.Z], () => u.Z.getGuild(null == g ? void 0 : g.guild_id)),
        C = r.useCallback(() => t(m.h8.REVIEW), [t]);
    if (null == x) return null;
    let S = (0, o.KW)(x.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.C3, {
                children: y
                    ? (0, i.jsx)(c.h, {
                          confirmCta: h.intl.string(h.t.PBHFSk),
                          onConfirm: C,
                          onCancel: n,
                          title: h.intl.format(h.t["6n6oXF"], { tier: x.name }),
                          subtitle: S
                              ? h.intl.string(h.t.lzAoKC)
                              : h.intl.formatToPlainString(h.t["GqaY/v"], { guildName: null == O ? void 0 : O.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(s.Oc, {
                          icon: null == v ? void 0 : v.thumbnail,
                          storeListingBenefits: null == v ? void 0 : v.benefits,
                          application: null != j ? j : void 0,
                          title: h.intl.format(h.t.haiCxc, { tier: x.name }),
                          subtitle: S ? h.intl.string(h.t.RvtbPz) : h.intl.string(h.t.zY39Zm),
                          description: S
                              ? h.intl.formatToPlainString(h.t.QCe4ra, { applicationName: null == j ? void 0 : j.name })
                              : h.intl.string(h.t.n1Pu8P),
                      }),
            }),
            !y &&
                (0, i.jsx)(f.O3, {
                    children: (0, i.jsx)(p.Z, {
                        onBack: n,
                        backText: h.intl.string(h.t.TQBY1N),
                        onPrimary: C,
                        primaryCTA: p.g.CONTINUE,
                        primaryText: h.intl.string(h.t["gZhF+/"]),
                    }),
                }),
        ],
    });
}
