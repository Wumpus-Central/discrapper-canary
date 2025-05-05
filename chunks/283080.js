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
n.d(t, { EA: () => o }), n(388685), n(255367), n(73800);
let i = {};
function a(e, t) {
    let n = e.length > t ? t : e.length;
    return e.substring(0, n).padEnd(t, ' ');
}
function o() {
    return 0 === Object.keys(i).length
        ? ''
        : 'Component Render Stats (microseconds):\n' +
              '|'.concat(a('id', 20), '|').concat(a('Mounts', 8), '|').concat(a('Mount Mean', 20), '|').concat(a('Updates', 8), '|').concat(a('Update Mean', 20), '|').concat(a('Nested', 8), '|').concat(a('Nested Mean', 20), '|\n') +
              Object.entries(i).map((e) => {
                  let [t, n] = e;
                  return '|'.concat(a(t, 20), '|').concat(a(n.mount.count.toString(), 8), '|').concat(a(n.mount.mean.toString(), 20), '|').concat(a(n.update.count.toString(), 8), '|').concat(a(n.update.mean.toString(), 20), '|').concat(a(n.nestedUpdate.count.toString(), 8), '|').concat(a(n.nestedUpdate.mean.toString(), 20), '|\n');
              });
}
