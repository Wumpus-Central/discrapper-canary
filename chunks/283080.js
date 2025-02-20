function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { EA: () => a }), n(47120), n(200651), n(192379);
let i = {};
function o(e, t) {
    let n = e.length > t ? t : e.length;
    return e.substring(0, n).padEnd(t, ' ');
}
function a() {
    return 0 === Object.keys(i).length
        ? ''
        : 'Component Render Stats (microseconds):\n' +
              '|'.concat(o('id', 20), '|').concat(o('Mounts', 8), '|').concat(o('Mount Mean', 20), '|').concat(o('Updates', 8), '|').concat(o('Update Mean', 20), '|').concat(o('Nested', 8), '|').concat(o('Nested Mean', 20), '|\n') +
              Object.entries(i).map((e) => {
                  let [t, n] = e;
                  return '|'.concat(o(t, 20), '|').concat(o(n.mount.count.toString(), 8), '|').concat(o(n.mount.mean.toString(), 20), '|').concat(o(n.update.count.toString(), 8), '|').concat(o(n.update.mean.toString(), 20), '|').concat(o(n.nestedUpdate.count.toString(), 8), '|').concat(o(n.nestedUpdate.mean.toString(), 20), '|\n');
              });
}
