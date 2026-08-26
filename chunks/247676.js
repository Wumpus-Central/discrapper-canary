n.d(t, { A: () => o });
var i = n(287809),
    l = n(474090),
    r = n(727245);
n(696101);
var s = n(652215),
    a = n(202541);
function o() {
    let { useNitroCapExperiment: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = i.default.getCurrentUser();
    return t?.isStaff()
        ? s.$aF
        : e && (0, l.ki)(t, a.PremiumTypes.TIER_2) && (0, r.J)("getGroupDMRecipientLimit").enabled
          ? 25
          : s.wLU;
}
