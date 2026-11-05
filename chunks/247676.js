var i = n(287809),
    r = n(474090),
    l = n(727245);
(n(696101), n(652215));
var s = n(682901);
n.d(
    t,
    {},
    {
        A: function () {
            let { useNitroCapExperiment: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = i.default.getCurrentUser();
            return t?.isStaff() ||
                (e && (0, r.ki)(t, s.PremiumTypes.TIER_2) && (0, l.J)("getGroupDMRecipientLimit").enabled)
                ? 25
                : 10;
        },
    },
);
