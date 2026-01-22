n.d(e, {
    N: () => i,
});
var l = n(309010),
    r = n(746080);

function i() {
    var t;
    let e = null != (t = l.A.getCurrentlySelectedChannelId()) ? t : void 0;
    return null != e && (0, r.jq)(e)
        ? {
              channel_static_route: e,
          }
        : {
              channel_id: e,
          };
}
