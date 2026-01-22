n.d(t, { A: () => i });
var r = n(116657);
let i = {
    "tiff:Orientation": (e) =>
        "1" === e
            ? "Horizontal (normal)"
            : "2" === e
              ? "Mirror horizontal"
              : "3" === e
                ? "Rotate 180"
                : "4" === e
                  ? "Mirror vertical"
                  : "5" === e
                    ? "Mirror horizontal and rotate 270 CW"
                    : "6" === e
                      ? "Rotate 90 CW"
                      : "7" === e
                        ? "Mirror horizontal and rotate 90 CW"
                        : "8" === e
                          ? "Rotate 270 CW"
                          : e,
    "tiff:ResolutionUnit": (e) => r.A.ResolutionUnit(parseInt(e, 10)),
    "tiff:XResolution": (e) => a(r.A.XResolution, e),
    "tiff:YResolution": (e) => a(r.A.YResolution, e),
    "exif:ApertureValue": (e) => a(r.A.ApertureValue, e),
    "exif:GPSLatitude": l,
    "exif:GPSLongitude": l,
    "exif:FNumber": (e) => a(r.A.FNumber, e),
    "exif:FocalLength": (e) => a(r.A.FocalLength, e),
    "exif:FocalPlaneResolutionUnit": (e) => r.A.FocalPlaneResolutionUnit(parseInt(e, 10)),
    "exif:ColorSpace": (e) => r.A.ColorSpace(s(e)),
    "exif:ComponentsConfiguration"(e, t) {
        if (/^\d, \d, \d, \d$/.test(t)) {
            let e = t.split(", ").map((e) => e.charCodeAt(0));
            return r.A.ComponentsConfiguration(e);
        }
        return t;
    },
    "exif:Contrast": (e) => r.A.Contrast(parseInt(e, 10)),
    "exif:CustomRendered": (e) => r.A.CustomRendered(parseInt(e, 10)),
    "exif:ExposureMode": (e) => r.A.ExposureMode(parseInt(e, 10)),
    "exif:ExposureProgram": (e) => r.A.ExposureProgram(parseInt(e, 10)),
    "exif:ExposureTime": (e) => (o(e) ? r.A.ExposureTime(e.split("/").map((e) => parseInt(e, 10))) : e),
    "exif:MeteringMode": (e) => r.A.MeteringMode(parseInt(e, 10)),
    "exif:Saturation": (e) => r.A.Saturation(parseInt(e, 10)),
    "exif:SceneCaptureType": (e) => r.A.SceneCaptureType(parseInt(e, 10)),
    "exif:Sharpness": (e) => r.A.Sharpness(parseInt(e, 10)),
    "exif:ShutterSpeedValue": (e) => a(r.A.ShutterSpeedValue, e),
    "exif:WhiteBalance": (e) => r.A.WhiteBalance(parseInt(e, 10)),
};
function a(e, t) {
    return o(t) ? e(t.split("/")) : t;
}
function s(e) {
    return "0x" === e.substring(0, 2) ? parseInt(e.substring(2), 16) : parseInt(e, 10);
}
function o(e) {
    return /^-?\d+\/-?\d+$/.test(e);
}
function l(e) {
    let [t, n] = e.split(",");
    if (void 0 !== t && void 0 !== n) {
        let e = parseFloat(t),
            r = parseFloat(n),
            i = n.charAt(n.length - 1);
        if (!Number.isNaN(e) && !Number.isNaN(r)) return "" + (e + r / 60) + i;
    }
    return e;
}
