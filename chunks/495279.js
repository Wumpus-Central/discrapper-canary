n.d(t, { Z: () => l });
var r = n(482241);
function l(e, t, n, l) {
    let { scheduled_start_time: i, scheduled_end_time: o } = e;
    return null == i && null == o
        ? r.Z.deleteGuildEventException(t, n, l)
        : r.Z.updateGuildEventException(
              {
                  scheduled_start_time: i,
                  scheduled_end_time: o,
                  is_canceled: !1
              },
              t,
              n,
              l
          );
}
