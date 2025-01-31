n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(650886);
function a(e) {
    let { disabled: t, deviceId: n, width: a, height: s } = e;
    return t
        ? (0, i.jsx)('div', {
              className: 'media-engine-video',
              style: {
                  width: a,
                  height: s
              }
          })
        : (0, i.jsx)(r.Z, {
              streamId: n,
              style: {
                  width: a,
                  height: s
              }
          });
}
a.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
