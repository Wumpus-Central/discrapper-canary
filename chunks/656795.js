n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(650886);
function a(e) {
    let { disabled: t, deviceId: n, width: a, height: o } = e;
    return t
        ? (0, r.jsx)("div", {
              className: "media-engine-video",
              style: {
                  width: a,
                  height: o,
              },
          })
        : (0, r.jsx)(i.Z, {
              streamId: n,
              style: {
                  width: a,
                  height: o,
              },
          });
}
a.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180,
};
