i.d(t, { A: () => l });
var s = i(582128),
    r = i(435558),
    n = i(174459),
    a = i(652215);
function l(e) {
    let { boxType: t, thirdPartyPartner: i } = e,
        l = s.useRef(null),
        o = s.useRef(!1);
    return {
        sectionRef: l,
        handleVisibilityChange: s.useCallback(
            (e) => {
                if (e && !o.current) {
                    o.current = !0;
                    let e = { box_type: (0, r.snakeCase)(t) };
                    null != i && (e.third_party_partner = i),
                        n.default.track(a.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, e);
                }
            },
            [t, i],
        ),
    };
}
