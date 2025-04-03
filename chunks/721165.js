n.d(t, { Z: () => g }), n(789020);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(131388),
    o = n(171246),
    s = n(689011),
    c = n(931905),
    u = n(430824),
    d = n(563132),
    m = n(409813),
    f = n(586585),
    p = n(614277),
    b = n(750143),
    h = n(388032);
function g(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: g, selectedSku: x, selectedStoreListing: N, application: v } = (0, d.JL)(),
        j = (0, a.Z)(b.i),
        y = (0, l.e7)([u.Z], () => u.Z.getGuild(null == g ? void 0 : g.guild_id)),
        C = i.useCallback(() => t(m.h8.REVIEW), [t]);
    if (null == x) return null;
    let O = (0, o.KW)(x.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.C3, {
                children: j
                    ? (0, r.jsx)(c.h, {
                          confirmCta: h.NW.string(h.t.PBHFSk),
                          onConfirm: C,
                          onCancel: n,
                          title: h.NW.format(h.t['6n6oXF'], { tier: x.name }),
                          subtitle: O ? h.NW.string(h.t.lzAoKC) : h.NW.formatToPlainString(h.t['GqaY/v'], { guildName: null == y ? void 0 : y.name }),
                          showOpenDiscord: !1
                      })
                    : (0, r.jsx)(s.Oc, {
                          icon: null == N ? void 0 : N.thumbnail,
                          storeListingBenefits: null == N ? void 0 : N.benefits,
                          application: null != v ? v : void 0,
                          title: h.NW.format(h.t.haiCxc, { tier: x.name }),
                          subtitle: O ? h.NW.string(h.t.RvtbPz) : h.NW.string(h.t.zY39Zm),
                          description: O ? h.NW.formatToPlainString(h.t.QCe4ra, { applicationName: null == v ? void 0 : v.name }) : h.NW.string(h.t.n1Pu8P)
                      })
            }),
            !j &&
                (0, r.jsx)(p.O3, {
                    children: (0, r.jsx)(f.Z, {
                        onBack: n,
                        backText: h.NW.string(h.t.TQBY1N),
                        onPrimary: C,
                        primaryCTA: f.g.CONTINUE,
                        primaryText: h.NW.string(h.t['gZhF+/'])
                    })
                })
        ]
    });
}
