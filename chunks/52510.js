i.d(t, { A: () => r });
var n = i(116657);
let r = {
    11: "ProcessingSoftware",
    254: {
        name: "SubfileType",
        description: (e) =>
            ({
                0: "Full-resolution image",
                1: "Reduced-resolution image",
                2: "Single page of multi-page image",
                3: "Single page of multi-page reduced-resolution image",
                4: "Transparency mask",
                5: "Transparency mask of reduced-resolution image",
                6: "Transparency mask of multi-page image",
                7: "Transparency mask of reduced-resolution multi-page image",
                65537: "Alternate reduced-resolution image",
                0xffffffff: "Invalid",
            })[e] || "Unknown",
    },
    255: {
        name: "OldSubfileType",
        description: (e) =>
            ({ 0: "Full-resolution image", 1: "Reduced-resolution image", 2: "Single page of multi-page image" })[e] ||
            "Unknown",
    },
    256: "ImageWidth",
    257: "ImageLength",
    258: "BitsPerSample",
    259: "Compression",
    262: "PhotometricInterpretation",
    263: {
        name: "Thresholding",
        description: (e) =>
            ({ 1: "No dithering or halftoning", 2: "Ordered dither or halfton", 3: "Randomized dither" })[e] ||
            "Unknown",
    },
    264: "CellWidth",
    265: "CellLength",
    266: { name: "FillOrder", description: (e) => ({ 1: "Normal", 2: "Reversed" })[e] || "Unknown" },
    269: "DocumentName",
    270: "ImageDescription",
    271: "Make",
    272: "Model",
    273: "StripOffsets",
    274: {
        name: "Orientation",
        description: (e) =>
            1 === e
                ? "top-left"
                : 2 === e
                  ? "top-right"
                  : 3 === e
                    ? "bottom-right"
                    : 4 === e
                      ? "bottom-left"
                      : 5 === e
                        ? "left-top"
                        : 6 === e
                          ? "right-top"
                          : 7 === e
                            ? "right-bottom"
                            : 8 === e
                              ? "left-bottom"
                              : "Undefined",
    },
    277: "SamplesPerPixel",
    278: "RowsPerStrip",
    279: "StripByteCounts",
    280: "MinSampleValue",
    281: "MaxSampleValue",
    282: { name: "XResolution", description: n.A.XResolution },
    283: { name: "YResolution", description: n.A.YResolution },
    284: "PlanarConfiguration",
    285: "PageName",
    286: { name: "XPosition", description: (e) => "" + Math.round(e[0] / e[1]) },
    287: { name: "YPosition", description: (e) => "" + Math.round(e[0] / e[1]) },
    290: {
        name: "GrayResponseUnit",
        description: (e) => ({ 1: "0.1", 2: "0.001", 3: "0.0001", 4: "1e-05", 5: "1e-06" })[e] || "Unknown",
    },
    296: { name: "ResolutionUnit", description: n.A.ResolutionUnit },
    297: "PageNumber",
    301: "TransferFunction",
    305: "Software",
    306: "DateTime",
    315: "Artist",
    316: "HostComputer",
    317: "Predictor",
    318: { name: "WhitePoint", description: (e) => e.map((e) => `${e[0]}/${e[1]}`).join(", ") },
    319: { name: "PrimaryChromaticities", description: (e) => e.map((e) => `${e[0]}/${e[1]}`).join(", ") },
    321: "HalftoneHints",
    322: "TileWidth",
    323: "TileLength",
    330: "A100DataOffset",
    332: { name: "InkSet", description: (e) => ({ 1: "CMYK", 2: "Not CMYK" })[e] || "Unknown" },
    337: "TargetPrinter",
    338: {
        name: "ExtraSamples",
        description: (e) => ({ 0: "Unspecified", 1: "Associated Alpha", 2: "Unassociated Alpha" })[e] || "Unknown",
    },
    339: {
        name: "SampleFormat",
        description: (e) => {
            let t = { 1: "Unsigned", 2: "Signed", 3: "Float", 4: "Undefined", 5: "Complex int", 6: "Complex float" };
            return Array.isArray(e) ? e.map((e) => t[e] || "Unknown").join(", ") : "Unknown";
        },
    },
    513: "JPEGInterchangeFormat",
    514: "JPEGInterchangeFormatLength",
    529: { name: "YCbCrCoefficients", description: (e) => e.map((e) => "" + e[0] / e[1]).join("/") },
    530: "YCbCrSubSampling",
    531: {
        name: "YCbCrPositioning",
        description: (e) => (1 === e ? "centered" : 2 === e ? "co-sited" : "undefined " + e),
    },
    532: { name: "ReferenceBlackWhite", description: (e) => e.map((e) => "" + e[0] / e[1]).join(", ") },
    700: "ApplicationNotes",
    18246: "Rating",
    18249: "RatingPercent",
    33432: { name: "Copyright", description: (e) => e.join("; ") },
    33550: "PixelScale",
    33723: "IPTC-NAA",
    33920: "IntergraphMatrix",
    33922: "ModelTiePoint",
    34118: "SEMInfo",
    34264: "ModelTransform",
    34377: "PhotoshopSettings",
    34665: "Exif IFD Pointer",
    34675: "ICC_Profile",
    34735: "GeoTiffDirectory",
    34736: "GeoTiffDoubleParams",
    34737: "GeoTiffAsciiParams",
    34853: "GPS Info IFD Pointer",
    40091: { name: "XPTitle", description: o },
    40092: { name: "XPComment", description: o },
    40093: { name: "XPAuthor", description: o },
    40094: { name: "XPKeywords", description: o },
    40095: { name: "XPSubject", description: o },
    42112: "GDALMetadata",
    42113: "GDALNoData",
    50341: "PrintIM",
    50707: "DNGBackwardVersion",
    50708: "UniqueCameraModel",
    50709: "LocalizedCameraModel",
    50721: "ColorMatrix1",
    50722: "ColorMatrix2",
    50723: "CameraCalibration1",
    50724: "CameraCalibration2",
    50725: "ReductionMatrix1",
    50726: "ReductionMatrix2",
    50727: "AnalogBalance",
    50728: "AsShotNeutral",
    50729: "AsShotWhiteXY",
    50730: "BaselineExposure",
    50731: "BaselineNoise",
    50732: "BaselineSharpness",
    50734: "LinearResponseLimit",
    50735: "CameraSerialNumber",
    50736: "DNGLensInfo",
    50739: "ShadowScale",
    50741: { name: "MakerNoteSafety", description: (e) => ({ 0: "Unsafe", 1: "Safe" })[e] || "Unknown" },
    50778: { name: "CalibrationIlluminant1", description: n.A.LightSource },
    50779: { name: "CalibrationIlluminant2", description: n.A.LightSource },
    50781: "RawDataUniqueID",
    50827: "OriginalRawFileName",
    50828: "OriginalRawFileData",
    50831: "AsShotICCProfile",
    50832: "AsShotPreProfileMatrix",
    50833: "CurrentICCProfile",
    50834: "CurrentPreProfileMatrix",
    50879: "ColorimetricReference",
    50885: "SRawType",
    50898: "PanasonicTitle",
    50899: "PanasonicTitle2",
    50931: "CameraCalibrationSig",
    50932: "ProfileCalibrationSig",
    50933: "ProfileIFD",
    50934: "AsShotProfileName",
    50936: "ProfileName",
    50937: "ProfileHueSatMapDims",
    50938: "ProfileHueSatMapData1",
    50939: "ProfileHueSatMapData2",
    50940: "ProfileToneCurve",
    50941: {
        name: "ProfileEmbedPolicy",
        description: (e) =>
            ({ 0: "Allow Copying", 1: "Embed if Used", 2: "Never Embed", 3: "No Restrictions" })[e] || "Unknown",
    },
    50942: "ProfileCopyright",
    50964: "ForwardMatrix1",
    50965: "ForwardMatrix2",
    50966: "PreviewApplicationName",
    50967: "PreviewApplicationVersion",
    50968: "PreviewSettingsName",
    50969: "PreviewSettingsDigest",
    50970: {
        name: "PreviewColorSpace",
        description: (e) => ({ 1: "Gray Gamma 2.2", 2: "sRGB", 3: "Adobe RGB", 4: "ProPhoto RGB" })[e] || "Unknown",
    },
    50971: "PreviewDateTime",
    50972: "RawImageDigest",
    50973: "OriginalRawFileDigest",
    50981: "ProfileLookTableDims",
    50982: "ProfileLookTableData",
    51043: "TimeCodes",
    51044: "FrameRate",
    51058: "TStop",
    51081: "ReelName",
    51089: "OriginalDefaultFinalSize",
    51090: "OriginalBestQualitySize",
    51091: "OriginalDefaultCropSize",
    51105: "CameraLabel",
    51107: { name: "ProfileHueSatMapEncoding", description: (e) => ({ 0: "Linear", 1: "sRGB" })[e] || "Unknown" },
    51108: { name: "ProfileLookTableEncoding", description: (e) => ({ 0: "Linear", 1: "sRGB" })[e] || "Unknown" },
    51109: "BaselineExposureOffset",
    51110: { name: "DefaultBlackRender", description: (e) => ({ 0: "Auto", 1: "None" })[e] || "Unknown" },
    51111: "NewRawImageDigest",
    51112: "RawToPreviewGain",
};
function o(e) {
    return new TextDecoder("utf-16").decode(new Uint8Array(e)).replace(/\u0000+$/, "");
}
