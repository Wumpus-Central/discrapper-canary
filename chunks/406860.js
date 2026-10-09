n.d(t, { A: () => l });
var a = n(582128),
    s = n(435558),
    i = n(174459),
    r = n(652215);
function l(e) {
    let { boxType: t, thirdPartyPartner: n } = e,
        l = a.useRef(null),
        o = a.useRef(!1);
    return {
        sectionRef: l,
        handleVisibilityChange: a.useCallback(
            (e) => {
                if (e && !o.current) {
                    o.current = !0;
                    let e = { box_type: (0, s.snakeCase)(t) };
                    (null != n && (e.third_party_partner = n),
                        i.default.track(r.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, e));
                }
            },
            [t, n],
        ),
    };
}
