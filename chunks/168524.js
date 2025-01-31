n.d(t, { Z: () => a });
var i = n(492423),
    r = n(774073);
function a(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: n } = e,
        a = (0, r.ZP)(e);
    return a.shouldOpenGameProfile && null != n
        ? (r) => {
              r.stopPropagation(),
                  r.preventDefault(),
                  i.Z.openGameProfileModal({
                      ...e,
                      applicationId: n,
                      gameProfileModalChecks: a
                  }),
                  null == t || t();
          }
        : void 0;
}
