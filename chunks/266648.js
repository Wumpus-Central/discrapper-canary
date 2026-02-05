i.d(t, { P: () => a });
var n = i(887501),
    l = i(684407),
    s = i(576705),
    r = i(110807);
function a(e) {
    let t = s.A.getGuildPermissionProps(e),
        i = (0, n.b)(e.id).length > 0;
    return r.Ay.generateSections({
        showDirtyGuildTemplateIndicator: !1,
        ...t,
        canUnlinkChannels: i,
        welcomeScreenEmpty: l.A.isEmpty(e.id),
    })
        .filter((e) => {
            let { section: t } = e;
            return "HEADER" !== t && "DIVIDER" !== t;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
