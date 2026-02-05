"use strict";
n(186659), n(104074), n(340818);
let r = /url\((['"]?)([^'"]+?)\1\)/g,
    i = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    a = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function s(e) {
    let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
