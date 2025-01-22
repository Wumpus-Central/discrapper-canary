r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(650886);
function o(e) {
    let { disabled: n, deviceId: r, width: o, height: s } = e;
    return n
        ? (0, i.jsx)('div', {
              className: 'media-engine-video',
              style: {
                  width: o,
                  height: s
              }
          })
        : (0, i.jsx)(a.Z, {
              streamId: r,
              style: {
                  width: o,
                  height: s
              }
          });
}
o.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
