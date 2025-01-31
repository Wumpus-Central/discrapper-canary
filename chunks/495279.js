e.d(n, { Z: () => i });
var l = e(482241);
function i(t, n, e, i) {
    let { scheduled_start_time: r, scheduled_end_time: u } = t;
    return null == r && null == u
        ? l.Z.deleteGuildEventException(n, e, i)
        : l.Z.updateGuildEventException(
              {
                  scheduled_start_time: r,
                  scheduled_end_time: u,
                  is_canceled: !1
              },
              n,
              e,
              i
          );
}
