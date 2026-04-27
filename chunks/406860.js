a.d(t, { A: () => o });
var s = a(64700),
    r = a(735438),
    n = a(954571),
    i = a(652215);
function o(e) {
    let { boxType: t, thirdPartyPartner: a } = e,
        o = s.useRef(null),
        d = s.useRef(!1);
    return {
        sectionRef: o,
        handleVisibilityChange: s.useCallback(
            (e) => {
                if (e && !d.current) {
                    d.current = !0;
                    let e = { box_type: (0, r.snakeCase)(t) };
                    null != a && (e.third_party_partner = a),
                        n.default.track(i.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, e);
                }
            },
            [t, a],
        ),
    };
}
