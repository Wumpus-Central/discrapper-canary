n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(650886);
function o(e) {
    let { disabled: t, deviceId: n, width: o, height: a } = e;
    return t
        ? (0, r.jsx)('div', {
              className: 'media-engine-video',
              style: {
                  width: o,
                  height: a
              }
          })
        : (0, r.jsx)(i.Z, {
              streamId: n,
              style: {
                  width: o,
                  height: a
              }
          });
}
o.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
