n.d(t, { A: () => a });
var l = n(17928),
    i = n(696451);
let s = 14 * n(927813).A.Millis.DAY;
function a(e, t) {
    return (0, l.bG)(
        [i.Ay],
        () =>
            null != e
                ? (function (e) {
                      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                      if (null == e || null == e.winningWeek) return null;
                      let n = Date.parse(e.winningWeek);
                      return isNaN(n) || t - n > s ? null : e;
                  })(i.Ay.getMember(e, t)?.gamingLeaderboardData)
                : null,
        [e, t],
    );
}
