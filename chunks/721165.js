t.d(e, { Z: () => g }), t(789020);
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
    x = t(388032);
function g(n) {
    let { handleStepChange: e, handleClose: t } = n,
        { subscriptionMetadataRequest: g, selectedSku: v, selectedStoreListing: b, application: C } = (0, d.JL)(),
        j = (0, a.Z)(p.i),
        S = (0, r.e7)([c.Z], () => c.Z.getGuild(null == g ? void 0 : g.guild_id)),
        N = l.useCallback(() => e(m.h8.REVIEW), [e]);
    if (null == v) return null;
    let k = (0, o.KW)(v.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.C3, {
                children: j
                    ? (0, i.jsx)(u.h, {
                          confirmCta: x.intl.string(x.t.PBHFSk),
                          onConfirm: N,
                          onCancel: t,
                          title: x.intl.format(x.t['6n6oXF'], { tier: v.name }),
                          subtitle: k ? x.intl.string(x.t.lzAoKC) : x.intl.formatToPlainString(x.t['GqaY/v'], { guildName: null == S ? void 0 : S.name }),
                          showOpenDiscord: !1
                      })
                    : (0, i.jsx)(s.Oc, {
                          icon: null == b ? void 0 : b.thumbnail,
                          storeListingBenefits: null == b ? void 0 : b.benefits,
                          application: null != C ? C : void 0,
                          title: x.intl.format(x.t.haiCxc, { tier: v.name }),
                          subtitle: k ? x.intl.string(x.t.RvtbPz) : x.intl.string(x.t.zY39Zm),
                          description: k ? x.intl.formatToPlainString(x.t.QCe4ra, { applicationName: null == C ? void 0 : C.name }) : x.intl.string(x.t.n1Pu8P)
                      })
            }),
            !j &&
                (0, i.jsx)(h.O3, {
                    children: (0, i.jsx)(f.Z, {
                        onBack: t,
                        backText: x.intl.string(x.t.TQBY1N),
                        onPrimary: N,
                        primaryCTA: f.g.CONTINUE,
                        primaryText: x.intl.string(x.t['gZhF+/'])
                    })
                })
        ]
    });
}
