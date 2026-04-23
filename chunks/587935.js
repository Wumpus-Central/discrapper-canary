i.d(t, { A: () => r });
var n = i(116657);
let r = {
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
    "tiff:ResolutionUnit": (e) => n.A.ResolutionUnit(parseInt(e, 10)),
    "tiff:XResolution": (e) => o(n.A.XResolution, e),
    "tiff:YResolution": (e) => o(n.A.YResolution, e),
    "exif:ApertureValue": (e) => o(n.A.ApertureValue, e),
    "exif:GPSLatitude": s,
    "exif:GPSLongitude": s,
    "exif:FNumber": (e) => o(n.A.FNumber, e),
    "exif:FocalLength": (e) => o(n.A.FocalLength, e),
    "exif:FocalPlaneResolutionUnit": (e) => n.A.FocalPlaneResolutionUnit(parseInt(e, 10)),
    "exif:ColorSpace": (e) => {
        var t;
        return n.A.ColorSpace("0x" === (t = e).substring(0, 2) ? parseInt(t.substring(2), 16) : parseInt(t, 10));
    },
    "exif:ComponentsConfiguration"(e, t) {
        if (/^\d, \d, \d, \d$/.test(t)) {
            let e = t.split(", ").map((e) => e.charCodeAt(0));
            return n.A.ComponentsConfiguration(e);
        }
        return t;
    },
    "exif:Contrast": (e) => n.A.Contrast(parseInt(e, 10)),
    "exif:CustomRendered": (e) => n.A.CustomRendered(parseInt(e, 10)),
    "exif:ExposureMode": (e) => n.A.ExposureMode(parseInt(e, 10)),
    "exif:ExposureProgram": (e) => n.A.ExposureProgram(parseInt(e, 10)),
    "exif:ExposureTime": (e) => (a(e) ? n.A.ExposureTime(e.split("/").map((e) => parseInt(e, 10))) : e),
    "exif:MeteringMode": (e) => n.A.MeteringMode(parseInt(e, 10)),
    "exif:Saturation": (e) => n.A.Saturation(parseInt(e, 10)),
    "exif:SceneCaptureType": (e) => n.A.SceneCaptureType(parseInt(e, 10)),
    "exif:Sharpness": (e) => n.A.Sharpness(parseInt(e, 10)),
    "exif:ShutterSpeedValue": (e) => o(n.A.ShutterSpeedValue, e),
    "exif:WhiteBalance": (e) => n.A.WhiteBalance(parseInt(e, 10)),
};
function o(e, t) {
    return a(t) ? e(t.split("/")) : t;
}
function a(e) {
    return /^-?\d+\/-?\d+$/.test(e);
}
function s(e) {
    let [t, i] = e.split(",");
    if (void 0 !== t && void 0 !== i) {
        let e = parseFloat(t),
            n = parseFloat(i),
            r = i.charAt(i.length - 1);
        if (!Number.isNaN(e) && !Number.isNaN(n)) return "" + (e + n / 60) + r;
    }
    return e;
}
