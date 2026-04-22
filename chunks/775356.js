Object.defineProperty(t, "__esModule", { value: !0 }), (t.ImageTypes = void 0);
class i {}
(t.ImageTypes = i),
    (i.AVIF = {
        extension: "avif",
        mimeType: "image/avif",
        description: "Alliance for Open Media (AOMedia) Video 1 (AV1) Image File",
        signatures: [{ sequence: [0, 0, 0] }],
    }),
    (i.BMP = {
        extension: "bmp",
        mimeType: "image/bmp",
        description: "A bitmap format used mostly in Windows",
        signatures: [{ sequence: [66, 77], compatibleExtensions: ["dib"] }],
    }),
    (i.BPG = {
        extension: "bpg",
        mimeType: "image/bpg",
        description: "Better Portable Graphics image format",
        signatures: [{ sequence: [66, 80, 71, 251] }],
    }),
    (i.CR2 = {
        extension: "cr2",
        mimeType: "image/x-canon-cr2",
        description: "Canon digital camera RAW file",
        signatures: [{ sequence: [73, 73, 42, 0, 16, 0, 0, 0, 67, 82] }],
    }),
    (i.EXR = {
        extension: "exr",
        mimeType: "image/x-exr",
        description: "OpenEXR bitmap image format",
        signatures: [{ sequence: [118, 47, 49, 1] }],
    }),
    (i.GIF = {
        extension: "gif",
        mimeType: "image/gif",
        description: "Image file encoded in the Graphics Interchange Format (GIF)",
        signatures: [{ sequence: [71, 73, 70, 56, 55, 97] }, { sequence: [71, 73, 70, 56, 57, 97] }],
    }),
    (i.HEIC = {
        extension: "heic",
        mimeType: "image/heic",
        description:
            "A variant of the HEIF (High Efficiency Image Format) that store images on the latest Apple devices.",
        signatures: [
            { sequence: [102, 116, 121, 112, 104, 101, 105, 99], offset: 4 },
            { sequence: [102, 116, 121, 112, 109], offset: 4 },
        ],
    }),
    (i.ICO = {
        extension: "ico",
        mimeType: "image/x-icon",
        description: "Computer icon encoded in ICO file format",
        signatures: [{ sequence: [0, 0, 1, 0], compatibleExtensions: ["spl"] }],
    }),
    (i.JPEG = {
        extension: "jpeg",
        mimeType: "image/jpeg",
        description: "JPEG (Joint Photographic Experts Group) is a widely used lossy image compression format.",
        signatures: [
            {
                sequence: [255, 216, 255, 225, 69, 120, 105, 102, 0],
                skippedBytes: [4, 5],
                description: "Digital camera JPG using Exchangeable Image File Format (EXIF)",
            },
            {
                sequence: [255, 216, 255, 232, 83, 80, 73, 70, 70, 0],
                skippedBytes: [4, 5],
                description: "Still Picture Interchange File Format (SPIFF)",
            },
            {
                sequence: [255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 0],
                description: "JPEG raw or in the JFIF or Exif file format",
            },
            { sequence: [255, 216, 255, 238], description: "JPEG raw or in the JFIF or Exif file format" },
            {
                sequence: [255, 216, 255, 225, 69, 120, 105, 102, 0, 0],
                skippedBytes: [4, 5],
                description: "JPEG raw or in the JFIF or Exif file format",
            },
            {
                sequence: [255, 216, 255, 224, 74, 70, 73, 70, 0],
                skippedBytes: [4, 5],
                description: "JPEG/JFIF graphics file",
                compatibleExtensions: ["jfif", "jpe"],
            },
            { sequence: [255, 216, 255, 224], description: "JPEG raw or in the JFIF or Exif file format" },
            { sequence: [255, 216], description: "Generic JPEGimage file", compatibleExtensions: ["jpe"] },
        ],
    }),
    (i.PBM = {
        extension: "pbm",
        mimeType: "image/x-portable-bitmap",
        description:
            "PBM (Portable Bitmap) is a simple monochrome bitmap image format that uses plain text ASCII characters to represent binary image data",
        signatures: [
            { sequence: [80, 49, 10], description: "Portable bitmap ASCII" },
            { sequence: [80, 52, 10], description: "Portable bitmap binary" },
        ],
    }),
    (i.PGM = {
        extension: "pgm",
        mimeType: "image/x-portable-graymap",
        description:
            "PGM (Portable Graymap) is a simple grayscale image format that uses ASCII text characters to represent binary image data.",
        signatures: [
            { sequence: [80, 50, 10], description: "Portable Gray Map ASCII" },
            { sequence: [80, 53, 10], description: "Portable Gray Map binary" },
        ],
    }),
    (i.PNG = {
        extension: "png",
        mimeType: "image/png",
        description:
            "PNG (Portable Network Graphics) is a lossless image compression format that supports a wide range of color depths and transparency and is widely used for high-quality graphics.",
        signatures: [{ sequence: [137, 80, 78, 71, 13, 10, 26, 10] }],
    }),
    (i.PPM = {
        extension: "ppm",
        mimeType: "image/x-portable-pixmap",
        description:
            "PPM (Portable Pixmap) is a simple color image format in the Portable Network Graphics (PNG) suite.",
        signatures: [
            { sequence: [80, 51, 10], description: "Portable Pixmap ASCII" },
            { sequence: [80, 54, 10], description: "Portable Pixmap binary" },
        ],
    }),
    (i.PSD = {
        extension: "psd",
        mimeType: "image/vnd.adobe.photoshop",
        description: "PSD (Photoshop Document) is an Adobe Photoshop image file format",
        signatures: [{ sequence: [56, 66, 80, 83] }],
    }),
    (i.WEBP = {
        extension: "webp",
        mimeType: "image/webp",
        description:
            "A modern image format that provides superior lossless and lossy compression for images on the web",
        signatures: [{ sequence: [82, 73, 70, 70, 87, 69, 66, 80], skippedBytes: [4, 5, 6, 7] }],
    });
