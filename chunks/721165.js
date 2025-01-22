t.d(e, {
    Z: function () {
        return x;
    }
}),
    t(789020);
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(131388),
    o = t(171246),
    s = t(689011),
    u = t(931905),
    c = t(430824),
    d = t(563132),
    m = t(409813),
    f = t(586585),
    h = t(614277),
    p = t(750143),
    g = t(388032);
function x(n) {
    let { handleStepChange: e, handleClose: t } = n,
        { subscriptionMetadataRequest: x, selectedSku: v, selectedStoreListing: b, application: C } = (0, d.usePaymentContext)(),
        j = (0, a.Z)(p.i),
        S = (0, r.e7)([c.Z], () => c.Z.getGuild(null == x ? void 0 : x.guild_id)),
        N = l.useCallback(() => e(m.h8.REVIEW), [e]);
    if (null == v) return null;
    let T = (0, o.KW)(v.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.C3, {
                children: j
                    ? (0, i.jsx)(u.h, {
                          confirmCta: g.intl.string(g.t.PBHFSk),
                          onConfirm: N,
                          onCancel: t,
                          title: g.intl.format(g.t['6n6oXF'], { tier: v.name }),
                          subtitle: T ? g.intl.string(g.t.lzAoKC) : g.intl.formatToPlainString(g.t['GqaY/v'], { guildName: null == S ? void 0 : S.name }),
                          showOpenDiscord: !1
                      })
                    : (0, i.jsx)(s.Oc, {
                          icon: null == b ? void 0 : b.thumbnail,
                          storeListingBenefits: null == b ? void 0 : b.benefits,
                          application: null != C ? C : void 0,
                          title: g.intl.format(g.t.haiCxc, { tier: v.name }),
                          subtitle: T ? g.intl.string(g.t.RvtbPz) : g.intl.string(g.t.zY39Zm),
                          description: T ? g.intl.formatToPlainString(g.t.QCe4ra, { applicationName: null == C ? void 0 : C.name }) : g.intl.string(g.t.n1Pu8P)
                      })
            }),
            !j &&
                (0, i.jsx)(h.O3, {
                    children: (0, i.jsx)(f.Z, {
                        onBack: t,
                        backText: g.intl.string(g.t.TQBY1N),
                        onPrimary: N,
                        primaryCTA: f.g.CONTINUE,
                        primaryText: g.intl.string(g.t['gZhF+/'])
                    })
                })
        ]
    });
}
