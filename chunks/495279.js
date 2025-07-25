e.d(n, { Z: () => i });
var l = e(482241);
function i(t, n, e, i) {
    let { scheduled_start_time: r, scheduled_end_time: o } = t;
    return null == r && null == o
        ? l.Z.deleteGuildEventException(n, e, i)
        : l.Z.updateGuildEventException(
              {
                  scheduled_start_time: r,
                  scheduled_end_time: o,
                  is_canceled: !1
              },
              n,
              e,
              i
          );
}
