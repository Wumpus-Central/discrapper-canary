r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(492423),
    a = r(774073);
function o(e) {
    let { onOpened: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: r } = e,
        o = (0, a.ZP)(e);
    return o.shouldOpenGameProfile && null != r
        ? (a) => {
              a.stopPropagation(),
                  a.preventDefault(),
                  i.Z.openGameProfileModal({
                      ...e,
                      applicationId: r,
                      gameProfileModalChecks: o
                  }),
                  null == n || n();
          }
        : void 0;
}
