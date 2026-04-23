"use strict";
n.d(t, { CI: () => s }), n(627968), n(64700);
let r = {};
function i(e, t) {
    let n = e.length > t ? t : e.length;
    return e.substring(0, n).padEnd(t, " ");
}
function s() {
    return 0 === Object.keys(r).length
        ? ""
        : `Component Render Stats (microseconds):
|${i("id", 20)}|${i("Mounts", 8)}|${i("Mount Mean", 20)}|${i("Updates", 8)}|${i("Update Mean", 20)}|${i("Nested", 8)}|${i("Nested Mean", 20)}|
` +
              Object.entries(r).map((e) => {
                  let [t, n] = e;
                  return `|${i(t, 20)}|${i(n.mount.count.toString(), 8)}|${i(n.mount.mean.toString(), 20)}|${i(n.update.count.toString(), 8)}|${i(n.update.mean.toString(), 20)}|${i(n.nestedUpdate.count.toString(), 8)}|${i(n.nestedUpdate.mean.toString(), 20)}|
`;
              });
}
