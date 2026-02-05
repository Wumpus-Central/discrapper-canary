"use strict";
function r(e) {
    (this.name = "MetadataMissingError"), (this.message = e || "No Exif data"), (this.stack = Error().stack);
}
n.d(t, { A: () => i }), (r.prototype = Error());
let i = { MetadataMissingError: r };
