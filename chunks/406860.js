a.d(t, { A: () => l });
var n = a(582128),
    s = a(435558),
    i = a(174459),
    r = a(652215);
function l(e) {
    let { boxType: t, thirdPartyPartner: a } = e,
        l = n.useRef(null),
        o = n.useRef(!1);
    return {
        sectionRef: l,
        handleVisibilityChange: n.useCallback(
            (e) => {
                if (e && !o.current) {
                    o.current = !0;
                    let e = { box_type: (0, s.snakeCase)(t) };
                    (null != a && (e.third_party_partner = a),
                        i.default.track(r.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, e));
                }
            },
            [t, a],
        ),
    };
}
