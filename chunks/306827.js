function n(e) {
    (this.name = "MetadataMissingError"), (this.message = e || "No Exif data"), (this.stack = Error().stack);
}
i.d(t, { A: () => r }), (n.prototype = Error());
let r = { MetadataMissingError: n };
