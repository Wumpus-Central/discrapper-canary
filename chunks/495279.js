n.d(e, { Z: () => r });
var l = n(482241);
function r(t, e, n, r) {
    let { scheduled_start_time: i, scheduled_end_time: u } = t;
    return null == i && null == u
        ? l.Z.deleteGuildEventException(e, n, r)
        : l.Z.updateGuildEventException(
              {
                  scheduled_start_time: i,
                  scheduled_end_time: u,
                  is_canceled: !1,
              },
              e,
              n,
              r,
          );
}
