i.d(t, { P: () => r });
var n = i(887501),
    s = i(684407),
    l = i(576705),
    a = i(110807);
function r(e) {
    let t = l.A.getGuildPermissionProps(e),
        i = (0, n.b)(e.id).length > 0;
    return a.Ay.generateSections({
        showDirtyGuildTemplateIndicator: !1,
        ...t,
        canUnlinkChannels: i,
        welcomeScreenEmpty: s.A.isEmpty(e.id),
    })
        .filter((e) => {
            let { section: t } = e;
            return "HEADER" !== t && "DIVIDER" !== t;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
