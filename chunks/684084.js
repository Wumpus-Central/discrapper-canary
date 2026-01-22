n.d(e, {
    A: () => r,
});
var l = n(496092);

function r(t, e, n, r) {
    let { scheduled_start_time: i, scheduled_end_time: u } = t;
    return null == i && null == u
        ? l.A.deleteGuildEventException(e, n, r)
        : l.A.updateGuildEventException(
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
