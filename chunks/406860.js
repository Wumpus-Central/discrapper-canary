n.d(r, { A: () => o });
var a = n(64700),
    l = n(735438),
    s = n(174459),
    t = n(652215);
function o(e) {
    let { boxType: r, thirdPartyPartner: n } = e,
        o = a.useRef(null),
        i = a.useRef(!1);
    return {
        sectionRef: o,
        handleVisibilityChange: a.useCallback(
            (e) => {
                if (e && !i.current) {
                    i.current = !0;
                    let e = { box_type: (0, l.snakeCase)(r) };
                    null != n && (e.third_party_partner = n),
                        s.default.track(t.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, e);
                }
            },
            [r, n],
        ),
    };
}
